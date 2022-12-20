const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const petRoutes = require('./routes/petRoutes');
const specieRoutes = require('./routes/specieRoutes');
const benefitRoutes= require('./routes/benefitRoutes')
const userRoutes= require('./routes/userRoutes')
const controlserviceRoutes= require('./routes/controlserviceRoutes');
const assessmentRoutes= require('./routes/assessmentRoutes');
//const controlservice = require('./models/controlservice');
const mailerRoutes = require('./routes/mailerRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', petRoutes);
app.use('/api', specieRoutes);
app.use('/api', benefitRoutes);
app.use('/api', userRoutes);
app.use('/api', assessmentRoutes);
app.use('/api', controlserviceRoutes);
//app.use('/api', controlservice);
app.use('/api', mailerRoutes);





app.listen(process.env.PORT, () => {
    console.log('El proyecto esta corriendo en el puerto -> ', process.env.PORT)
});

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log('Error al conectar con la base de datos -> ', err)
    }
    return console.log('Conectado a la base de datos')
});



