package eladkay.ellipticcurve.mathengine;

public class Point {

    private final double x;
    private final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public Point invertY() {
        return new Point(x, -y);
    }

    @Override
    public boolean equals(Object obj) {
        return obj instanceof Point && ((Point)obj).x == x && ((Point)obj).y == y;
    }

    @Override
    public String toString() {
        return "("+x+","+y+")";
    }
}
