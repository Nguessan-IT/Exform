-- Fix security issue: Restrict public access to profiles_keyli table
-- Drop the insecure public SELECT policy
DROP POLICY IF EXISTS "Les profils Keyli sont visibles par tout le monde" ON public.profiles_keyli;

-- Create secure policy: Users can only view their own profile
CREATE POLICY "Users can view their own profile"
ON public.profiles_keyli
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create secure policy: Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
ON public.profiles_keyli
FOR SELECT
TO authenticated
USING (get_user_role_keyli(auth.uid()) = 'admin');