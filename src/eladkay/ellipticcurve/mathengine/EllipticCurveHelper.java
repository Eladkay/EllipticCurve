package eladkay.ellipticcurve.mathengine;

public class EllipticCurveHelper {
    private EllipticCurve curve;
    private Field field;

    public EllipticCurveHelper(EllipticCurve curve) {
        this.curve = curve;
        this.field = curve.getField();
    }

    public Point add(Point a, Point b) {
        if(!curve.isPointOnCurve(a) || !curve.isPointOnCurve(b)) throw new IllegalArgumentException("points not on curve!");
        if(a.equals(b)) {
            double m = field.inv(field.multiply(2, a.getY()))*field.add(curve.getAValue(), field.multiply(3, field.exp(a.getX(), 3)));
            double x3 = field.add(field.exp(m, 2), field.multiply(field.neg(2), a.getX()));
            double y3 = field.add(field.multiply(m, field.add(a.getX(), field.neg(x3))), field.neg(a.getY()));
            return new Point(x3, y3);
        } else {
            double m = field.multiply(field.inv(field.add(b.getX(), field.neg(a.getX()))), field.add(b.getY(), field.neg(a.getY())));
            double x3 = field.add(field.exp(m,2), field.neg(field.add(a.getX(), b.getX())));
            double y3 = field.add(field.multiply(m, field.add(a.getX(), field.neg(x3))), field.neg(a.getY()));
            return new Point(x3, y3);
        }
    }

    public Point multiply(Point a, int num) {
        if(num == 1) return a;
        else return add(a, multiply(a, num-1));
    }

}
