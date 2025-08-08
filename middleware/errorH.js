export function errorH(err, req, res, next) {
    console.error('Erreur attrapée :', err.message);
  
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Une erreur inconnue est survenue.',
      },
    });
}
  