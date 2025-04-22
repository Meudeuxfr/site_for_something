import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword, name }]);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(201).json({ message: 'User created successfully', user: data });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}