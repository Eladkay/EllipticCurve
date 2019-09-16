package eladkay.ellipticcurve.mathengine;


public class EllipticCurve {

    private final double aCoefficient;
    private final double bCoefficient;
    private final Field field;
    public EllipticCurve(double a, double b, Field field) {
        this.aCoefficient = a;
        this.bCoefficient = b;
        this.field = field;
        if(determinant() == 0 || !field.belongsTo(aCoefficient) || !field.belongsTo(bCoefficient)) throw new IllegalArgumentException("Invalid curve!");
    }

    private double determinant() {
        return field.realsToField(-16*(4*Math.pow(aCoefficient, 3) + 27 * Math.pow(bCoefficient, 2)));
    }

    public Field getField() {
        return field;
    }

    @Override
    public String toString() {
        if(aCoefficient != 0) {
            if (bCoefficient != 0)
                return "y²=x³ + " + this.aCoefficient + "x + " + bCoefficient;
            else return "y²=x³ + " + this.aCoefficient + "x";
        } else {
            if (bCoefficient != 0)
                return "y²=x³ + " + this.bCoefficient;
            else
                throw new IllegalStateException();
        }

    }

    public boolean isPointOnCurve(Point p) {
        return field.exp(p.getY(), 2) == field.add(field.exp(p.getX(), 3), field.add(field.multiply(p.getX(), aCoefficient), bCoefficient));
    }

    public double getAValue() {
        return aCoefficient;
    }

    public double getBValue() {
        return bCoefficient;
    }
}
