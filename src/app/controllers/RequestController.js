const RequestService = require('../services/RequestService');

const requestController = {
  processRequest: async (req, res) => {
    try {
      const { subject, data } = req.body;
      await RequestService.processRequest(subject, data);
      res.status(200).json({ message: 'Solicitação recebida e encaminhada para processamento.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = requestController;