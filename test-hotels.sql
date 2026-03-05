-- Test Hotels Visibility
-- Run this to check if hotels are visible to public

-- 1. Check if hotels exist
SELECT id, name, is_active FROM hotels;

-- 2. Check current policies on hotels table
SELECT polname, polcmd, pg_get_expr(polqual, polrelid) AS using_expr
FROM pg_policy p
JOIN pg_class c ON p.polrelid = c.oid
WHERE c.relname = 'hotels';

-- 3. Test public access (this should return hotels)
SET ROLE anon;
SELECT * FROM hotels WHERE is_active = true;
RESET ROLE;
