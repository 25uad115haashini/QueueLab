Queue Simulator – ADT and Operations
https://25uad115haashini.github.io/QueueLab/
📌 Project Overview

The Queue Simulator is a web-based mini project developed to demonstrate the Queue Abstract Data Type (ADT) and its basic operations.

A queue follows the FIFO (First In, First Out) principle, where the element inserted first is removed first.

🎯 Objective

The main objective of this project is to understand and visualize how a queue works through an interactive web interface.

🔹 Queue ADT

The Queue ADT is a linear data structure that supports insertion and deletion of elements from specific ends.

* Insertion is performed at the Rear.
* Deletion is performed from the Front.
* It follows the FIFO principle.

⚙️ Queue Operations

1. Enqueue

Adds a new element to the rear of the queue.

Example:
Queue: 10 20 30
Enqueue 40
Result: 10 20 30 40

2. Dequeue

Removes the element from the front of the queue.

Example:
Queue: 10 20 30
Dequeue
Result: 20 30

3. Peek

Displays the element currently present at the front without removing it.

Example:
Queue: 10 20 30
Peek → 10

4. IsEmpty

Checks whether the queue contains any elements.

* If the queue has no elements → True
* Otherwise → False

5. IsFull

Checks whether the queue has reached its maximum capacity.

🧠 Queue Algorithm

Enqueue Algorithm

1. Check whether the queue is full.
2. If full, display Queue Overflow.
3. Otherwise, insert the element at the rear.
4. Update the rear position.

Dequeue Algorithm

1. Check whether the queue is empty.
2. If empty, display Queue Underflow.
3. Otherwise, remove the element from the front.
4. Update the front position.

💻 Technologies Used

* HTML
* CSS
* JavaScript

🌐 Applications of Queue

Queues are commonly used in:

* Printer scheduling
* CPU scheduling
* Customer service systems
* Network data handling
* Ticket booking systems
* Task scheduling
* Call center systems

📊 Example

Input:

Enqueue 10
Enqueue 20
Enqueue 30
Dequeue
Peek

Output:

Queue: 20 30
Front Element: 20

📝 Conclusion

The Queue Simulator provides a simple and interactive way to understand the Queue ADT, FIFO principle, and its basic operations. It helps users visualize how elements are inserted, removed, and accessed in a queue.

👩‍💻 Project Type

Mini Project – Data Structures

Topic: Queue ADT and Operations
