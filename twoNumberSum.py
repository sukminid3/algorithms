def twoNumberSum(array, targetSum):
    # Write your code here.
    for i in range(0, len(array)-1):
        for j in range(i+1, len(array)):
            if array[i] + array[j] == targetSum:
                return [array[i], array[j]]
    
    return []


#example
print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))