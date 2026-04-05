from django.db import models

# Create your models here.
class Task(models.Model):    #“Access the Model class inside the models module”
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):  
        return self.title
    
    '''Without __str__:
<Task: Task object (1)>
With __str__:
Learn Django
self -> current task'''