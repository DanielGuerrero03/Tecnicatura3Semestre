
package test;


public class TestAutoBoxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
            Clases envolventes de tipos primitivos
            int = la clase envolvente es Integer
            long = la clase envolvente es Float
            double = la clase envolvente es Boolean
            byte = la clase envolvente es Byte
            char = la clase envolvente es Character
            short = la clase envolvente es Short
        */
        
        int enteroPrim = 10; // Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo Objet con la clase Integer
        System.out.println("entero = " + entero); //Autoboxing
        
        int enetero2 = entero; //Unboxing
        System.out.println("enetero2 = " + enetero2);
        
    }
}
