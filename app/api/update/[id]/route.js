// api/[id]/update.js
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const { id } = req.query;
  const { firstName, lastName, email, gender, department, skills, about } = req.body;

  try {
    // Perform the update operation using the provided data
    await query(
      'UPDATE employees SET firstName = ?, lastName = ?, email = ?, gender = ?, department = ?, skills = ?, about = ? WHERE id = ?',
      [firstName, lastName, email, gender, department, JSON.stringify(skills), about, id]
    );
    return NextResponse.json({ message: 'Employee updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating employee:', error);
    return NextResponse.json({ message: 'Error updating employee' }, { status: 500 });
  }
}
