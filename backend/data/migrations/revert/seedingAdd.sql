-- Revert ocrypto:seedingAdd from pg

BEGIN;

TRUNCATE challenge, "level", lexicon, article, "user", question, answer RESTART IDENTITY CASCADE;

COMMIT;
