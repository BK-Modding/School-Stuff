cd ~ubuntu
cd workspace/
cd udemy-dl/
echo "Enter chapter number"
read cn
python3 udemy-dl.py https://www.udemy.com/java-the-complete-java-developer-course/learn/v4 -c $cn -o "../udemy_stuff"
