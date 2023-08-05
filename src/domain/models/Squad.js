class Squad {
    constructor(name, maxConcurrentRequests) {
      this.name = name;
      this.maxConcurrentRequests = maxConcurrentRequests;
      this.queue = [];
      this.processing = [];
    }
  
    enqueueRequest(request) {
      this.queue.push(request);
      this.processRequests();
    }
  
    processRequests() {
      while (this.queue.length > 0 && this.processing.length < this.maxConcurrentRequests) {
        const request = this.queue.shift();
        console.log(request)
        this.processing.push(request);
        this.processRequest(request);
      }
    }
  
    processRequest(request) {
      setTimeout(() => {
        console.log(`[${this.name}] Processed request:`, request);
        this.processing = this.processing.filter(req => req !== request);
        this.processRequests();
      }, 8000); // Simulando o tempo de processamento
    }
}

module.exports = Squad;