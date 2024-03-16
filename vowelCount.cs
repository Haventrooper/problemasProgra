using System;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;
        int i = 0;
        int j = 0;
        char[] vowels = {'a','e','i','o','u'};
      
        for( i = 0; i < str.Length; i++)
        {
          for( j = 0; j < vowels.Length; j++)
          {
            if(str[i] == vowels[j])
            {
              vowelCount++;
            }
            else
            {
              continue;
            }
          }
        }

        // Your code here

        return vowelCount;
    }
}
