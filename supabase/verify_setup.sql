-- Run after setup_all.sql. Every row should say "OK".
select 'table ' || t as check, case when to_regclass('public.' || t) is not null then 'OK' else 'MISSING' end as result
from unnest(array['contact_requests', 'client_applications', 'supplier_applications']) as t
union all
select 'RLS on ' || relname, case when relrowsecurity then 'OK' else 'RLS OFF' end
from pg_class where relname in ('contact_requests', 'client_applications', 'supplier_applications') and relnamespace = 'public'::regnamespace
union all
select 'insert policy on ' || tablename, 'OK'
from pg_policies where schemaname = 'public' and policyname = 'website can submit'
union all
select 'anon can insert into ' || table_name, 'OK'
from information_schema.role_table_grants where grantee = 'anon' and table_schema = 'public' and privilege_type = 'INSERT'
  and table_name in ('contact_requests', 'client_applications', 'supplier_applications')
union all
select 'anon can NOT read ' || t, case when has_table_privilege('anon', 'public.' || t, 'SELECT') then 'PROBLEM: anon can read' else 'OK' end
from unnest(array['contact_requests', 'client_applications', 'supplier_applications']) as t
order by 1;
