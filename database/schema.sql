-- ==============================================================================
-- SQL DDL Schéma: Tabuľka nehnuteľností pre Realsoft exporty (KEYS PARTNERS a.s.)
-- Kompatibilné s PostgreSQL (aj s MySQL s drobnými úpravami JSONB -> JSON)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS properties (
    id VARCHAR(36) PRIMARY KEY,
    
    -- Unikátny identifikátor zákazky v Realsofte (United Classifieds)
    external_id VARCHAR(100) NOT NULL UNIQUE,
    
    -- Textové informácie inzerátu
    title VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Cenové údaje
    price DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'EUR' NOT NULL,
    
    -- Typ transakcie a nehnuteľnosti
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('sale', 'rent', 'predaj', 'prenajom')),
    property_type VARCHAR(30) NOT NULL CHECK (property_type IN ('flat', 'house', 'land', 'commercial', 'other', 'byt', 'dom', 'pozemok', 'komercne')),
    status VARCHAR(20) DEFAULT 'active' NOT NULL CHECK (status IN ('active', 'reserved', 'sold', 'inactive', 'deleted')),
    
    -- Lokalita
    location_city VARCHAR(100) NOT NULL,
    location_district VARCHAR(100),
    location_street VARCHAR(150),
    formatted_address VARCHAR(255),
    gps_lat DOUBLE PRECISION,
    gps_lng DOUBLE PRECISION,
    
    -- Výmera
    area DOUBLE PRECISION,          -- Úžitková / obytná plocha v m2
    area_land DOUBLE PRECISION,     -- Výmera pozemku v m2
    
    -- Fotografie (Pole URL adries uložené ako JSONB)
    images JSONB DEFAULT '[]'::jsonb NOT NULL,
    
    -- Maklér
    agent_name VARCHAR(150),
    agent_phone VARCHAR(50),
    agent_email VARCHAR(150),
    
    -- Audit dát
    raw_payload JSONB,
    
    -- Časové záznamy
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Indexy pre bleskové vyhľadávanie a filtrovanie
CREATE INDEX IF NOT EXISTS idx_properties_external_id ON properties(external_id);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_transaction_type ON properties(transaction_type);
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_location_city ON properties(location_city);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);
