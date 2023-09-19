
import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/ranking');
    const data = await response.json();

    fs.writeFileSync(path.join(process.cwd(), 'data.json'), JSON.stringify(data, null, 2));
    
    res.status(200).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};