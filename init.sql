CREATE TABLE IF NOT EXISTS userspurchases (
  userid TEXT,
  username TEXT,
  price Float NOT NULL,
  timestamp TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_total_spent  (
  userid TEXT NOT NULL,
  total_spent Float NOT NULL
);
