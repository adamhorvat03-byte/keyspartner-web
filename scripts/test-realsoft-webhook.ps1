<#
.SYNOPSIS
    Testovací skript pre Admin Nehnuteľnosti / Realsoft Webhook endpoint
.DESCRIPTION
    Tento skript vykoná 4 testy:
    1. Požiadavka bez autentifikácie (Očakávaný výsledok: HTTP 401 Unauthorized)
    2. Overenie cez HTTP hlavičku 'x-api-key' (Očakávaný výsledok: HTTP 200 {"status":"ok","message":"Import successful"})
    3. Overenie cez pole 'apiKey' priamo v JSON tele požiadavky
    4. Overenie cez HTTP Basic Auth (Meno a Heslo)
#>

param(
    [string]$EndpointUrl = "https://keyspartner.netlify.app/api/realsoft-webhook",
    [string]$ApiKey = "vygenerovany_tajny_retazec_keyspartners_2026",
    [string]$BasicUser = "admin_nehnutelnosti",
    [string]$BasicPass = "tajne_heslo_partnera_987"
)

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  TESTOVANIE ADMIN NEHNUTEĽNOSTI WEBHOOK ENDPOINTU" -ForegroundColor Cyan
Write-Host "  Cieľový Endpoint: $EndpointUrl" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# TEST 1: Neautorizovaná požiadavka bez tokenu
Write-Host "[TEST 1] Odosielam požiadavku bez tokenu (Očakáva sa 401 Unauthorized)..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri $EndpointUrl -Method POST -Body "{}" -ContentType "application/json" -ErrorAction Stop
    Write-Host "  ZLYHANIE: Endpoint vrátil HTTP 200 namiesto 401!" -ForegroundColor Red
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    if ($statusCode -eq 401) {
        Write-Host "  ÚSPECH: Endpoint správne vrátil HTTP 401 Unauthorized." -ForegroundColor Green
    } else {
        Write-Host "  Kód odpovede servera: $statusCode" -ForegroundColor Yellow
    }
}
Write-Host ""

# TEST 2: Overenie cez HTTP hlavičku 'x-api-key'
Write-Host "[TEST 2] Odosielam import s hlavičkou 'x-api-key'..." -ForegroundColor Yellow
$samplePayloadPath = Join-Path $PSScriptRoot "sample-payload.json"
$samplePayload = Get-Content $samplePayloadPath -Raw

$headersApiKey = @{
    "x-api-key" = $ApiKey
}

try {
    $response = Invoke-RestMethod -Uri $EndpointUrl -Method POST -Headers $headersApiKey -Body $samplePayload -ContentType "application/json" -ErrorAction Stop
    Write-Host "  ÚSPECH: Server vrátil HTTP 200 OK." -ForegroundColor Green
    Write-Host "  Odpoveď: $($response | ConvertTo-Json -Compress)" -ForegroundColor Gray
} catch {
    Write-Host "  CHYBA: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# TEST 3: Overenie cez pole 'apiKey' v JSON tele
Write-Host "[TEST 3] Odosielam import s 'apiKey' v JSON tele (bez hlavičky)..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri $EndpointUrl -Method POST -Body $samplePayload -ContentType "application/json" -ErrorAction Stop
    Write-Host "  ÚSPECH: Server vrátil HTTP 200 OK." -ForegroundColor Green
    Write-Host "  Odpoveď: $($response | ConvertTo-Json -Compress)" -ForegroundColor Gray
} catch {
    Write-Host "  CHYBA: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# TEST 4: Overenie cez HTTP Basic Auth
Write-Host "[TEST 4] Odosielam import cez HTTP Basic Auth ($BasicUser)..." -ForegroundColor Yellow
$base64Auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${BasicUser}:${BasicPass}"))
$headersBasic = @{
    "Authorization" = "Basic $base64Auth"
}

# Payload bez apiKey v tele, aby sa otestoval čisto Basic Auth
$bodyWithoutKey = @"
{
  "action": "upsert",
  "property": {
    "external_id": "RS-88421",
    "title": "Test cez Basic Auth",
    "price": 179900,
    "currency": "EUR",
    "transaction_type": "predaj",
    "property_type": "byt",
    "city": "Prešov"
  }
}
"@

try {
    $response = Invoke-RestMethod -Uri $EndpointUrl -Method POST -Headers $headersBasic -Body $bodyWithoutKey -ContentType "application/json" -ErrorAction Stop
    Write-Host "  ÚSPECH: Server vrátil HTTP 200 OK cez Basic Auth." -ForegroundColor Green
    Write-Host "  Odpoveď: $($response | ConvertTo-Json -Compress)" -ForegroundColor Gray
} catch {
    Write-Host "  CHYBA: $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  TESTOVANIE DOKONČENÉ" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
