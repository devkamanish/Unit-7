class TaskService {
  createTask(name: string) {
    console.log(`Creating task: ${name}`);
  }
}

class EmailService {
  sendEmail(to: string) {
    console.log(`Sending email to ${to}`);
  }
}

class TaskManager {
  private taskService: TaskService;
  private emailService: EmailService;

  constructor() {
    this.taskService = new TaskService();
    this.emailService = new EmailService();
  }

  createTask(name: string) {
    this.taskService.createTask(name);
  }

  sendEmail(to: string) {
    this.emailService.sendEmail(to);
  }
}

// Usage
const manager = new TaskManager();
manager.createTask("Finish report");
manager.sendEmail("john@example.com");

