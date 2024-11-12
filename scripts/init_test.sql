-- Drop table if exists
DROP TABLE IF EXISTS posts;

-- Create the post table
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  content TEXT NOT NULL,
  category_id INT NOT NULL,
  tags TEXT[],
  images TEXT
);


-- Insert 5 fake data and use lorem ipsum for strings. For the content make it as maximum as 5 words
INSERT INTO posts (title, slug, content, category_id, tags, images) VALUES
  ('Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet', 1, '{"lorem", "ipsum"}', 'image1.jpg'),
  ('Consectetur adipiscing elit', 'consectetur-adipiscing-elit', 'Consectetur adipiscing elit', 2, '{"consectetur", "adipiscing"}', 'image2.jpg'),
  ('Sed do eiusmod tempor', 'sed-do-eiusmod-tempor', 'Sed do eiusmod tempor', 3, '{"sed", "do"}', 'image3.jpg'),
  ('Incididunt ut labore et dolore', 'incididunt-ut-labore-et-dolore', 'Incididunt ut labore et dolore', 4, '{"incididunt", "ut"}', 'image4.jpg'),
  ('Magna aliqua ut enim ad', 'magna-aliqua-ut-enim-ad', 'Magna aliqua ut enim ad', 5, '{"magna", "aliqua"}', 'image5.jpg');
