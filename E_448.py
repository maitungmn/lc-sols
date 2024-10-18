def find_disappeared_numbers(nums):
    if len(nums) <= 1:
        return []

    result = []
    num_set = set(nums)

    for i in range(1, len(nums) + 1):
        if i not in num_set:
            result.append(i)

    return result