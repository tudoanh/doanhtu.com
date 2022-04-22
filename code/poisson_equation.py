# $\nabla^2 f = h$
# It means: Find me a function $f$ where every value everywhere is the average of the values around it.

import numpy as np


def step(f, threshold=1e-10, overcorrection_factor=1.94):
    height, width = f.shape

    converged = True

    for x in range(width):
        for y in range(height):
            if x in [0, width - 1] or y in [0, height - 1]:
                f[y, x] = f[y, x]
            else:
                old_val = f[y, x]
                average = (f[y - 1, x] + f[y + 1, x] + f[y, x - 1] + f[y, x + 1]) / 4.0
                diff = average - old_val

                f[y, x] += diff * overcorrection_factor

                if abs(diff) > threshold:
                    converged = False

    return converged


N = 50
f = np.zeros((N, N))
f[0:N, N - 1] = 1.0

print(f)

n = 0

while True:
    done = step(f)
    if done:
        print(f"Take {n} steps \n{f} \n")
        break
    else:
        n += 1
