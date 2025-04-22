import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Retrieve user by email
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, password, name')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the hashed password with the one provided
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Respond with the user data for session management
    return res.status(200).json({ message: 'Login successful', user });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}