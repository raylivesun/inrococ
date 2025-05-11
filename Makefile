CXX = g++
CXXFLAGS = -Wall -Werror -Wextra -pedantic -std=c++17 -g main.cpp
# -Werror is used to treat warnings as errors
# -Wextra is used to enable extra warnings
# -pedantic is used to enforce strict ISO C++ compliance
# -std=c++17 is used to enable C++17 features
# -g is used to generate debug information
# -O0 is used to disable optimization
LDFLAGS =  main.cpp
# -L/usr/local/cuda/lib64 is used to link against the CUDA library
# -lcudart is used to link against the CUDA runtime library
# -lcudadevrt is used to link against the CUDA device runtime library
# -lcudart_static is used to link against the static CUDA runtime library
# -lcudadevrt_static is used to link against the static CUDA device runtime library
# -lstdc++fs
# -lstdc++fs is not needed for C++17 and above

SRC = 
OBJ = $(SRC:.cpp=.o)
EXEC = inrococ

all: $(EXEC)

$(EXEC): $(OBJ)
	$(CXX) $(LDFLAGS) -o $@ $(OBJ) $(LBLIBS)

clean:
	rm -rf $(OBJ) $(EXEC)