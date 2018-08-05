package lista;

public class ListasEncad {
    public static void main(String[] args) {
        Lista lista = new Lista();
        lista.PrintAll();

	lista.RemoverDoInicio();
        lista.PrintAll();
	
        lista.AddNoFinal(5);
        lista.AddNoFinal(7);
        lista.PrintAll();

        lista.AddNoInicio(1);
	lista.AddNoInicio(75);
        lista.PrintAll();
    }
}