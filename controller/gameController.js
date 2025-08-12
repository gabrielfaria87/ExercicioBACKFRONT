const { Router } = require('express');
const db = require('../db');


exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM jogos');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogos' });
  }
};


exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM jogos WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar jogo' });
  }
};


exports.create = async (req, res) => {
  const { nome, tipo, ano } = req.body;
  if (!nome || !tipo || !ano) return res.status(400).json({ error: 'Todos os campos são obrigatórios' });

  try {
    const [result] = await db.query('INSERT INTO jogos (nome, tipo, ano) VALUES (?, ?, ?)', [nome, tipo, ano]);
    res.status(201).json({ id: result.insertId, nome, tipo, ano });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inserir jogo' });
  }
};


exports.update = async (req, res) => {
  const { nome, tipo, ano } = req.body;
  if (!nome || !tipo || !ano) return res.status(400).json({ error: 'Todos os campos são obrigatórios' });

  try {
    const [result] = await db.query('UPDATE jogos SET nome = ?, tipo = ?, ano = ? WHERE id = ?', [nome, tipo, ano, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
    res.status(200).json({ id: req.params.id, nome, tipo, ano });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar jogo' });
  }
};


exports.remove = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM jogos WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar jogo' });
  }
};

module.exports = Router