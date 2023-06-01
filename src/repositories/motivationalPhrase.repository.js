import sqlite3 from 'sqlite3';
import path from 'path';
import { randomUUID } from 'crypto';

const dbPath = path.resolve(new URL(import.meta.url).pathname, '../motivationalPhrases_db');

class MotivationalPhrasesRepository {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  async create({ motivationalPhrase }) {
    return new Promise((resolve , reject) => {

      const id = randomUUID();

      this.db.run('INSERT INTO motivationalPhrases VALUES(?, ?)', [id, motivationalPhrase], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
  
    })
  }
  
  async list() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM motivationalPhrases', (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
  
}

export default new MotivationalPhrasesRepository();