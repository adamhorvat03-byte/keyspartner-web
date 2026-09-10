# Jednoduchý statický webový server v PowerShell
$port = 8080
$localPath = "C:\Users\adamh\.gemini\antigravity\scratch\haloreality-redesign"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server spustený na http://localhost:$port/"
    Write-Host "Stlačením Ctrl+C server zastavíte."
    
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") { $urlPath = "/index.html" }
            
            # Odstránenie úvodného lomítka a spojenie ciest
            $relPath = $urlPath.Substring(1).Replace("/", "\")
            $filePath = [System.IO.Path]::Combine($localPath, $relPath)
            
            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                
                # Priradenie MIME typov
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                    ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".jpeg" { $response.ContentType = "image/jpeg" }
                    ".gif"  { $response.ContentType = "image/gif" }
                    ".svg"  { $response.ContentType = "image/svg+xml" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $html = "<html><body><h1>404 Nenájdené</h1><p>Súbor $urlPath neexistuje.</p></body></html>"
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($html)
                $response.ContentType = "text/html; charset=utf-8"
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $response.Close()
        } catch {
            Write-Warning $_.Exception.Message
        }
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    $listener.Stop()
}
