import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Pedágio Inteligente API is running' });
});

// TODO: Add routes
// app.use('/api/auth', authRoutes);
// app.use('/api/tags', tagsRoutes);
// app.use('/api/vehicles', vehiclesRoutes);
// app.use('/api/tolls', tollsRoutes);
// app.use('/api/payments', paymentsRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`🚗 Pedágio Inteligente API running on port ${PORT}`);
});
