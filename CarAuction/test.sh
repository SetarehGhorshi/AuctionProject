#!/bin/bash
PATH=$PATH:$(go env GOPATH)/bin 
i=1
max=0
while true
do
bid=$(( $RANDOM % 500 + 1 ))
if [[ $bid -gt $max ]]
then
max=$bid
fi
block=`CarAuctiond tx car place-bid $bid --from alice -y | grep -E -o 'height: "[0-9]+"' | grep -E -o '[0-9]+'`
a=$(( 100*i ))
if [[ $block -gt $a ]]
then
out=`CarAuctiond q car list-highest-per-hundred | grep -E -o "period: ${i} 
value: [0-9]+"| grep -E -o "value: [0-9]+" | grep -E -o "[0-9]+"`
read -ra arr -d '' <<<"$out"
if [[ ${arr[$i - 1]} -eq $max ]]
then 
echo "pass!"
max=0
else
echo "fail!"
break
fi
i=$i+1
fi
done