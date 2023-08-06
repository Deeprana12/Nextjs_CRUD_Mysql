// api/add.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const POST = async(req, res) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
  
  const data = await req.json()
  console.log(data)
  const { firstName, lastName, email, gender, department, skills, about } = data;
  // Validate required fields
  if (!firstName || !lastName || !email || !gender || !department || !skills || !about) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // Perform the insert operation for the new employee
    await query(
      'INSERT INTO employees (firstName, lastName, email, gender, department, skills, about) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, gender, department, JSON.stringify(skills), about]
    );
    return NextResponse.json({ message: 'Employee added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding employee:', error);
    return NextResponse.json({ message: 'Error adding employee' }, { status: 500 });
  }
}
