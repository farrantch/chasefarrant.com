filepath=$1
s3_bucket=$2
stack_name=$3
parameter_filepath=$4

datetime=$(date +"%Y-%m-%dT%H:%M:%S")

aws cloudformation package \
    --template-file $filepath \
    --s3-bucket $s3_bucket \
    --force-upload \
    --output-template-file $filepath.out \
    --s3-prefix $datetime

aws cloudformation deploy \
    --template-file $filepath.out \
    --s3-bucket $s3_bucket \
    --s3-prefix $datetime \
    --stack-name $stack_name \
    --parameter-overrides file://$parameter_filepath \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND

rm $filepath.out