package lista;

public class Lista {
    private Node head;
    private Node current;
    public int count;
    
    public Lista() {
        head = new Node();
        current = head;
    }
    
    public void AddNoFinal(Object data){
        Node newNode = new Node();
        newNode.value = data;
        current.next = newNode;
        current = newNode;
        count++;
    }
    
    public void AddNoInicio(Object data){
          Node newNode = new Node(head.next, data);
          newNode.next = head.next;
          head.next = newNode;
          count++;
    }
    
    public void RemoverDoInicio() {
       if (count > 0) {
         head.next = head.next.next;
         count--;
       } else {
           System.out.println("Lista Vazia.");
       }
    }
    
    public void PrintAll() {

        System.out.print("Head ->");
        Node curr = head;
        
        while (curr.next != null) {
            curr = curr.next;
            System.out.print(curr.value);
            System.out.print("->");
        }
        
        System.out.println("NULL");
    }   
}