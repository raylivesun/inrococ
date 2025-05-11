#!/usr/bin/env perl
# -*- perl -*-
# $Id: matrix.t,v 1.1 2003/01/30 20:57:23 jason Exp $
# $Log: matrix.t,v $
# Revision 1.1  2003/01/30 20:57:23  jason
# Initial revision
#

# This file is part of the GNU Scientific Library (GSL).
use strict;
use warnings;
use Test::More;
use Test::More tests => 1;


sub test_matrix {
    my $matrix = shift;
    my $expected = shift;
    my $result = matrix_multiply($matrix, $matrix);
    is_deeply($result, $expected, "Matrix multiplication test");
}
sub matrix_multiply {
    my ($A, $B) = @_;
    my $rows_A = scalar @$A;
    my $cols_A = scalar @{$A->[0]};
    my $rows_B = scalar @$B;
    my $cols_B = scalar @{$B->[0]};

    die "Incompatible matrices" if $cols_A != $rows_B;

    my @C;
    for my $i (0 .. $rows_A - 1) {
        for my $j (0 .. $cols_B - 1) {
            $C[$i][$j] = 0;
            for my $k (0 .. $cols_A - 1) {
                $C[$i][$j] += $A->[$i][$k] * $B->[$k][$j];
            }
        }
    }
    return \@C;
}
# Example matrices
my $A = [
    [1, 2],
    [3, 4]
];
my $B = [
    [5, 6],
    [7, 8]
];
my $expected = [
    [19, 22],
    [43, 50]
];
# Run the test
test_matrix($A, $expected);
# Test with another example
my $C = [
    [1, 0],
    [0, 1]
];
my $D = [
    [1, 2],
    [3, 4]
];
my $expected2 = [
    [1, 2],
    [3, 4]
];
# Run the test
test_matrix($C, $expected2);
# Test with a non-square matrix
my $E = [
    [1, 2, 3],
    [4, 5, 6]
];
my $F = [
    [7, 8],
    [9, 10],
    [11, 12]
];
my $expected3 = [
    [58, 64],
    [139, 154]
];
# Run the test
test_matrix($E, $expected3);
# Test with a zero matrix
my $G = [
    [0, 0],
    [0, 0]
];
my $H = [
    [1, 2],
    [3, 4]
];
my $expected4 = [
    [0, 0],
    [0, 0]
];
# Run the test
test_matrix($G, $expected4);
# Test with a single element matrix
my $I = [
    [5]
];
my $J = [
    [3]
];
my $expected5 = [
    [15]
];
# Run the test
test_matrix($I, $expected5);
# Test with a large matrix
my $K = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
my $L = [
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    [29, 30, 31, 32]
];
my $expected6 = [
    [250, 260, 270, 280],
    [618, 644, 670, 696],
    [986, 1028, 1070, 1112],
    [1354, 1412, 1480, 1548]
];
# Run the test
test_matrix($K, $expected6);
# Test with a non-invertible matrix
my $M = [
    [1, 2],
    [2, 4]
];
my $N = [
    [5, 6],
    [7, 8]
];
my $expected7 = [
    [0, 0],
    [0, 0]
];
# Run the test
test_matrix($M, $expected7);
# Test with a matrix with negative numbers
my $O = [
    [-1, -2],
    [-3, -4]
];
my $P = [
    [-5, -6],
    [-7, -8]
];
my $expected8 = [
    [19, 22],
    [43, 50]
];
# Run the test
test_matrix($O, $expected8);
# Test with a matrix with mixed numbers
my $Q = [
    [1, -2],
    [-3, 4]
];
my $R = [
    [5, -6],
    [-7, 8]
];
my $expected9 = [
    [-7, 8],
    [15, -18]
];
# Run the test
test_matrix($Q, $expected9);
# Test with a matrix with floating point numbers
my $S = [
    [1.5, 2.5],
    [3.5, 4.5]
];
my $T = [
    [5.5, 6.5],
    [7.5, 8.5]
];
my $expected10 = [
    [23.5, 26.5],
    [53.5, 62.5]
];
# Run the test
test_matrix($S, $expected10);
# Test with a matrix with complex numbers
my $U = [
    [1+2, 3+4],
    [5+6, 7+8]
];
my $V = [
    [9+10, 11+12],
    [13+14, 15+16]
];
my $expected11 = [
    [-7+8, -6+8],
    [-15+18, -14+18]
];
# Run the test
test_matrix($U, $expected11);
# Test with a matrix with large numbers
my $W = [
    [1000000000, 2000000000],
    [3000000000, 4000000000]
];
my $X = [
    [5000000000, 6000000000],
    [7000000000, 8000000000]
];
my $expected12 = [
    [19000000000000000000, 22000000000000000000],
    [43000000000000000000, 50000000000000000000]
];
# Run the test
test_matrix($W, $expected12);
# Test with a matrix with small numbers
my $Y = [
    [0.0001, 0.0002],
    [0.0003, 0.0004]
];
my $Z = [
    [0.0005, 0.0006],
    [0.0007, 0.0008]
];
my $expected13 = [
    [0.00019, 0.00022],
    [0.00043, 0.00050]
];
# Run the test
test_matrix($Y, $expected13);

