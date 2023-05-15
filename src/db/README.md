## Instalar o sqlite3

### No linux - usando o ubuntu com apt

```
sudo apt install sqlite3
```

### criando um arquivo para trabalhar com o sqlite
```
sqlite3 nome-do-banco;
```

### Criando uma TABLE
```
CREATE TABLE nome_table(id INT, name TEXT);
```

### Inserir um registro na table

```
INSERT INTO nome_table values (1, "Bob has a cap");
```

### Buscar todos os registros da table

```
SELECT * FROM nome_table;
```

### Buscar registros com WHERE

```
SELECT * FROM nome_table WHERE id = 1;
```

### Buscar registros com o filtro LIKE

```
SELECT * FROM nome_table WHERE name LIKE "%cap%";
```

### Atualizar registros (Cuidado com isso)

```
UPDATE nome_table
SET name = "isaias";
```
### Atualizar registros com WHERE

```
UPDATE nome_table
SET name = "Biel"
WHERE id = 2;
```

### Deleta um registro
```
DELETE FROM nome_table WHERE id = 1;
```

### Deleta uma tabela
```
DROP TABLE nome_da_tabela;
```

### Listar as tables
```
.tables
```
### Limpar console
```
.shell clear
```

### Verificar informações da tabela
```
PRAGMA table_info(nome_table);
```

### Mostrando todas as tabelas (show tables)
```sql
SELECT name FROM sqlite_master WHERE type='table';

SELECT count(id) FROM phrases;
```
=============================================

CREATE TABLE proprietarios(id INT , name string); 
CREATE TABLE pets(id INT , name string , raca string , peso FLOAT);


CREATE TABLE  phrases         (id TEXT PRIMARY KEY, phrase TEXT);
CREATE TABLE  phrases         (id TEXT UNIQUE, phrase TEXT);
INSERT INTO   phrases values  (3, "Bob has a cap");
INSERT INTO   phrases values  (2, "Dad has a cat");

SELECT * FROM phrases WHERE id = 1;

DELETE FROM phrases WHERE id = 1;

CREATE TABLE  phrases         (id TEXT PRIMARY KEY, phrase TEXT);

