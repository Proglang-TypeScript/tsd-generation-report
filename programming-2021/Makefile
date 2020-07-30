SHELL=/bin/sh
DOC=main
LATEX=pdflatex
BIBPROG=biber

.SUFFIXES:
.SUFFIXES: .bib .pdf .tex
.PHONY: clean

run: $(DOC).pdf

$(DOC).pdf: $(DOC).bbl $(DOC).tex
	$(LATEX) $(DOC) -draftmode
	$(LATEX) $(DOC) 

$(DOC).bbl: $(DOC).aux $(DOC).bib
	$(BIBPROG) $(DOC)

clean:
	rm -rf *.aux *.lof *.log *.lot *.toc *.bbl *.blg *.vtc *.out $(DOC).pdf
