package eladkay.ellipticcurve.mathengine;

public abstract class Field {

    public static final Field REALS = new RealsField();

    /**
     * Create a new Field object describing the cyclic field Zp
     * @param p prime number, this is not checked
     * @return a new field Zp over the integers up to p
     */
    public static Field createModuloField(int p) {
        return new ZpField(p);
    }

    abstract boolean belongsTo(double number);

    abstract double realsToField(double number);

    abstract double add(double a, double b);

    abstract double multiply(double a, double b);

    abstract double neg(double a);

    abstract double inv(double a);

    public double exp(double a, int n) {
        if(n==1) return a;
        else return exp(a, n-1)*a;
    }

    private static class RealsField extends Field {

        @Override
        boolean belongsTo(double number) {
            return number != Double.NaN && number != Double.POSITIVE_INFINITY && number != Double.NEGATIVE_INFINITY;
        }

        @Override
        double realsToField(double number) {
            return number;
        }

        @Override
        double add(double a, double b) {
            return a+b;
        }

        @Override
        double multiply(double a, double b) {
            return a*b;
        }

        @Override
        double neg(double a) {
            return -a;
        }

        @Override
        double inv(double a) {
            if(a==0) throw new IllegalArgumentException("no inverse for additive identity");
            return 1/a;
        }
    }

    private static class ZpField extends Field {

        private final int modulo;

        public ZpField(int p) {
            modulo = p;
        }

        @Override
        boolean belongsTo(double number) {
            return (int)number == number && number > 0 && number < modulo;
        }

        @Override
        double realsToField(double number) {
            if((int)number != number) return 0;
            return number % 5;
        }

        @Override
        double add(double a, double b) {
            return (a+b)%modulo;
        }

        @Override
        double multiply(double a, double b) {
            return a*b%modulo;
        }

        @Override
        double neg(double a) {
            return modulo-a;
        }

        @Override
        double inv(double a) {
            if(a==0) throw new IllegalArgumentException("no inverse for additive identity");
            // Euler's theorem
            double aInv = 1;
            for(int i = 0; i < modulo-2; i++) aInv = aInv * a;
            return aInv % modulo;
        }
    }
}
