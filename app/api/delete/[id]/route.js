// api/[id]/delete.js
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const { id } = req.query;

  try {
    // Perform the delete operation for the employee with the given ID
    await query('DELETE FROM employees WHERE id = ?', [id]);
    return NextResponse.json({ message: 'Employee deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json({ message: 'Error deleting employee' }, { status: 500 });
  }
}
