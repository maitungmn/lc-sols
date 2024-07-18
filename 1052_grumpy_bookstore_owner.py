# https://leetcode.com/problems/grumpy-bookstore-owner/submissions/1324738901/?envType=daily-question&envId=2024-04-19

def max_satisfied(customers, grumpy, minutes):
    n = len(customers)

    # Calculate the number of satisfied customers without using the secret technique
    satisfied_customers = 0
    for i in range(n):
        if grumpy[i] == 0:
            satisfied_customers += customers[i]

    # Calculate the additional customers that can be satisfied by using the secret technique
    additional_satisfied = 0
    max_additional_satisfied = 0
    for i in range(n):
        if grumpy[i] == 1:
            additional_satisfied += customers[i]
        if i >= minutes and grumpy[i - minutes] == 1:
            additional_satisfied -= customers[i - minutes]
        max_additional_satisfied = max(max_additional_satisfied, additional_satisfied)

    return satisfied_customers + max_additional_satisfied


# Example usage:
print(max_satisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))  # Output: 16
print(max_satisfied([1], [0], 1))  # Output: 1
