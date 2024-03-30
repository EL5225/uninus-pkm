{ pkgs, ... }:

{
  packages = with pkgs; [ nodejs nodePackages.pnpm ];
  languages.nix.enable = true;
  languages.typescript.enable = true;
}
