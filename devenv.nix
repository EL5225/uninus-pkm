{ pkgs, ... }:

{
  packages = with pkgs; [ nodejs gcc ];
  languages.nix.enable = true;
  languages.typescript.enable = true;
}
