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
CREATE TABLE nome_table(id INT, name string);
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

### Listar as tables
```
.tables
```
### Limpar console
```
.shell clear
```

=============================================

CREATE TABLE proprietarios(id INT , name string); 
CREATE TABLE pets(id INT , name string , raca string , peso FLOAT);

