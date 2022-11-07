--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg22.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dining; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dining (
    id integer NOT NULL,
    name character varying(30),
    amount integer,
    note character varying(50)
);


ALTER TABLE public.dining OWNER TO postgres;

--
-- Name: grocery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grocery (
    id integer NOT NULL,
    name character varying(30),
    amount integer,
    note character varying(50)
);


ALTER TABLE public.grocery OWNER TO postgres;

--
-- Name: household; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.household (
    id integer NOT NULL,
    name character varying(30),
    amount integer,
    note character varying(50)
);


ALTER TABLE public.household OWNER TO postgres;

--
-- Data for Name: dining; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dining (id, name, amount, note) FROM stdin;
\.


--
-- Data for Name: grocery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grocery (id, name, amount, note) FROM stdin;
1	ribeye	5	little meat for my belly
\.


--
-- Data for Name: household; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.household (id, name, amount, note) FROM stdin;
1	mop	50	
\.


--
-- Name: dining dining_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dining
    ADD CONSTRAINT dining_pkey PRIMARY KEY (id);


--
-- Name: grocery grocery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grocery
    ADD CONSTRAINT grocery_pkey PRIMARY KEY (id);


--
-- Name: household household_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.household
    ADD CONSTRAINT household_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

