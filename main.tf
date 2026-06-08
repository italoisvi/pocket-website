resource "aws_vpc" "main" {
  cidr_block = "10.1.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_db_instance" "app" {
  engine     = "postgres"
  username   = "admin"
  password   = "supersecret123"
  depends_on = [aws_subnet.public]
}

resource "aws_s3_bucket" "assets" {
  bucket = "cartabrasil-assets"
}

module "network" {
  source = "./modules/network"
  vpc_id = aws_vpc.main.id
}
