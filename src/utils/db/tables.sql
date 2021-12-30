CREATE TABLE IF NOT EXISTS users (
    userId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    email text NOT NULL,
    age integer NOT NULL,
    nationality text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
);

CREATE TABLE IF NOT EXISTS cities (
    cityId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    cityName text NOT NULL,
    country string NOT NULL,
);

CREATE TABLE IF NOT EXISTS houses (
    houseId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    houseName text NOT NULL,
    houseDescription text NOT NULL,
    guestCapacity integer NOT NULL,
    amountOfRooms integer NOT NULL,
    amountOfBeds integer NOT NULL,
    amenities text NOT NULL,
    houseLocation text NOT NULL,
    rating integer NOT NULL,
    pricePerNight integer NOT NULL,
    propertyType text NOT NULL,
);

CREATE TABLE IF NOT EXISTS reviews (
    reviewId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    comment text NOT NULL,
    rating integer NOT NULL,
    houseId integer,
    created_at timestamp with time zone DEFAULT now(), 
    CONSTRAINT review_pkey PRIMARY KEY (reviewId),
    CONSTRAINT review_houseId_fkey FOREIGN KEY (houseId)
    REFERENCES public.houses (houseId) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);