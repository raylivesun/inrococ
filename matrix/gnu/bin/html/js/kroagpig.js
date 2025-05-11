/**
 * @license
 * Kroagpig v1.0.0
 * Copyright (c) 2023 Kroagpig
 * MIT License
 * https://opensource.org/licenses/MIT
 * 
 */

// Kroagpig is a simple JavaScript library for creating and manipulating 2D matrices.

// It provides a set of functions to create, manipulate, and visualize matrices.
// The library is designed to be easy to use and understand, making it suitable for both beginners and experienced developers.
// The library is written in JavaScript and can be used in any JavaScript environment, including web browsers and Node.js.
// The library is open source and is released under the MIT License.
// The library is available on GitHub at

function kroagpig() {
    // Create a new matrix
    function createMatrix(rows, cols) {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }

    // Print the matrix to the console
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    // Add two matrices
    function addMatrices(matrixA, matrixB) {
        const result = createMatrix(matrixA.length, matrixA[0].length);
        for (let i = 0; i < matrixA.length; i++) {
            for (let j = 0; j < matrixA[i].length; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        return result;
    }
    // Subtract two matrices
    function subtractMatrices(matrixA, matrixB) {
        const result = createMatrix(matrixA.length, matrixA[0].length);
        for (let i = 0; i < matrixA.length; i++) {
            for (let j = 0; j < matrixA[i].length; j++) {
                result[i][j] = matrixA[i][j] - matrixB[i][j];
            }
        }
        return result;
    }
    // Multiply two matrices
    function multiplyMatrices(matrixA, matrixB) {
        const result = createMatrix(matrixA.length, matrixB[0].length);
        for (let i = 0; i < matrixA.length; i++) {
            for (let j = 0; j < matrixB[0].length; j++) {
                for (let k = 0; k < matrixA[0].length; k++) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return result;
    }
}
//
// Transpose a matrix
    function transposeMatrix(matrix) {
        const result = createMatrix(matrix[0].length, matrix.length);
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
    // Export the functions
    return {
        createMatrix,
        printMatrix,
        addMatrices,
        subtractMatrices,
        multiplyMatrices,
        transposeMatrix
    };

// Kroagpig is a simple JavaScript library for creating and manipulating 2D matrices.