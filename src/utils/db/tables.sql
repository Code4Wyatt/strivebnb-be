CREATE TABLE IF NOT EXISTS users (
    userId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    legalName varchar(200) NOT NULL,
    email text NOT NULL,
    dateOfBirth date NOT NULL,
    phoneNumber integer,
    governmentId text,
    userAddress text,
    emergencyContact text,
    chinaTravelPassport boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
);

CREATE TABLE IF NOT EXISTS cities (
    cityId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    cityName text NOT NULL,
    country text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
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
    country text NOT NULL,
    rating integer NOT NULL,
    pricePerNight integer NOT NULL,
    houseCategoryId string NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
);

CREATE TABLE IF NOT EXISTS reviews (
    reviewId integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    comment text NOT NULL,
    rating integer NOT NULL,
    houseId string NOT NULL,
    userId string NOT NULL,
    created_at timestamp with time zone DEFAULT now(), 
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT review_pkey PRIMARY KEY (reviewId),
    CONSTRAINT review_houseId_fkey FOREIGN KEY (houseId)
    REFERENCES public.houses (houseId) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);