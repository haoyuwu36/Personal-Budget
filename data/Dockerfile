FROM postgres:latest

WORKDIR /var/lib/postgresql

RUN echo pwd

COPY . ./

RUN psql -U postgres postgres < data.pgsql

EXPOSE 5432


