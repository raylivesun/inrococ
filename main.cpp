#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <cmath>
#include <limits>
#include <functional>
#include <numeric>
#include <cassert>
#include <iomanip>
#include <sstream>
#include <chrono>
#include <random>
#include <thread>
#include <future>
#include <iterator>
#include <type_traits>
#include <array>
#include <bitset>
#include <list>
#include <deque>
#include <tuple>
#include <variant>
#include <optional>
#include <regex>
#include <filesystem>
#include <initializer_list>
#include <memory>
#include <stdexcept>
#include <exception>
#include <iterator>
#include <cctype>
#include <cstdlib>
#include <cstring>
#include <cstdio>
#include <ctime>
#include <cassert>
#include <cmath>
#include <climits>
#include <cfloat>
#include <cstdint>
#include <cstddef>
#include <cstdarg>
#include <cinttypes>
#include <ciso646>
#include <csetjmp>
#include <cstdalign>
#include <cstdbool>
#include <cstdint>
#include <cuchar>
#include <ccomplex>
#include <cctype>
#include <cfloat>
#include <cinttypes>
#include <cstdarg>
#include <cstddef>
#include <cstdint>
#include <cuchar>
#include <ciso646>
#include <csetjmp>
#include <cstdalign>
#include <cstdbool>
#include <cstdint>

void solve() {
    int n, m;
    std::cin >> n >> m;
    std::vector<int> a(n);
    for (int i = 0; i < n; ++i) {
        std::cin >> a[i];
    }
    std::sort(a.begin(), a.end());
    int ans = 0;
    for (int i = 0; i < n; ++i) {
        if (a[i] > m) {
            break;
        }
        ans++;
        m -= a[i];
    }
    std::cout << ans << std::endl;
}

int main() {
    int t;
    std::cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
// This code is a simple implementation of a greedy algorithm to solve a problem where we need to maximize the number of items we can take without exceeding a given limit.
// The code reads the number of test cases, and for each test case, it reads the number of items and their respective weights.
// It then sorts the weights in ascending order and iteratively adds them to a total until the limit is reached.
// The result is printed for each test case.
// The code uses standard input/output and includes necessary headers for various functionalities.
// The code is structured to be efficient and clear, using STL containers and algorithms for simplicity.
// The code is designed to be easy to read and understand, with clear variable names and comments explaining the logic.
// The code is also designed to be efficient, using sorting and a greedy approach to minimize the number of iterations needed to find the solution.
// The code is written in C++17, which allows for modern features and best practices in C++ programming.



